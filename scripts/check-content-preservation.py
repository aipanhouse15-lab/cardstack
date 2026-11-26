"""Run after npm run build. Compare rendered article text with the deployed ZIP.

This flags shrinkage; passing does not prove accuracy or restore every original topic.
Original ZIP8 counts remain visible in the output to keep historical cuts reviewable.
"""
import json
import re
from html.parser import HTMLParser
from pathlib import Path


class VisibleText(HTMLParser):
    def __init__(self):
        super().__init__()
        self.skip = 0
        self.text = []

    def handle_starttag(self, tag, attrs):
        if tag in ('head', 'script', 'style', 'nav', 'svg'):
            self.skip += 1

    def handle_endtag(self, tag):
        if tag in ('head', 'script', 'style', 'nav', 'svg'):
            self.skip = max(0, self.skip - 1)

    def handle_data(self, value):
        if not self.skip:
            self.text.append(value)


root = Path(__file__).resolve().parent.parent
baseline = json.loads((root / 'scripts/content-baseline.json').read_text())
failures = []
print('Route\tOriginal ZIP8\tDeployed ZIP12\tCurrent\tChange from ZIP12')
for route, values in baseline['pages'].items():
    path = root / '.next/server/app' / (route.lstrip('/') + '.html')
    if not path.is_file():
        failures.append(f'{route}: rendered page is missing')
        continue
    parser = VisibleText()
    parser.feed(path.read_text())
    words = len(re.findall(r'[\w₹]+', ' '.join(parser.text)))
    deployed = values['deployed12']
    original = values['original8']
    change = (words / deployed - 1) * 100 if deployed else None
    label = f'{change:+.1f}%' if change is not None else 'no deployed article body'
    print(f'{route}\t{original}\t{deployed}\t{words}\t{label}')
    if deployed >= 300 and words < deployed * 0.85:
        failures.append(f'{route}: more than 15% less rendered text than deployed ZIP12')
if failures:
    raise SystemExit('\n'.join(failures))
print('No material article-text reduction against the deployed ZIP12 baseline.')
