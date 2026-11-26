// Compatibility entry point. Historical batch files are retained for provenance;
// their unsupported fixed-rate/approval copy is not current product editorial.
import { CARDS } from '../cards';
import { reviewedEditorial } from '../reviewed-editorial';
export function getEditorial(cardId) {
  const card = CARDS.find(item => item.id === cardId);
  return card ? reviewedEditorial(card) : null;
}
