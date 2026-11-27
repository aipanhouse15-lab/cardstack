import details from "@/data/featured-card-details.json";

export default function CardFeatureTable({ card }) {
  const values = details.cards[card.id].values;
  let index = 0;

  return (
    <section id="card-features" className="side-box card-feature-table">
      <h2 className="card-review-heading">Card features at a glance</h2>
      <p><strong>N/A</strong> means the feature doesn’t apply to the standard card shown. <strong>Not verified</strong> means we couldn’t confirm it.</p>
      <table aria-label={`${card.name} card features`}>
        <thead><tr><th scope="col">Feature</th><th scope="col">{card.name}</th></tr></thead>
        {Object.entries(details.groups).map(([group, labels]) => (
          <tbody key={group}>
            <tr className="feature-group"><th colSpan={2} scope="rowgroup">{group}</th></tr>
            {labels.map(label => (
              <tr key={label}><th scope="row">{label}</th><td>{values[index++]}</td></tr>
            ))}
          </tbody>
        ))}
      </table>
      <a href="#card-sources">See issuer sources</a>
    </section>
  );
}
