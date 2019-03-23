import {
  FILTER_PRODUCTS,
  FILTER_ACCESSORIES,
  FILTER_SHOES,
  FILTER_ACCESSORIES_SELECTIONS,
  FILTER_SHOES_SELECTIONS,
  FILTER_BOOTS,
  FILTER_SNEAKER,
  FILTER_CHELSEA_BOOTS,
} from '../constants';

const INITIAL_STATE = {
  shoesFilter: Object.values(FILTER_SHOES_SELECTIONS),
  accessoriesFilter: Object.values(FILTER_ACCESSORIES_SELECTIONS),
  shoesFilterType: "all",
  accessoriesFilterType: "all"
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
      let newFilter;

      if (action.payload.type === FILTER_SHOES) {
        switch (action.payload.selectedFilter) {
          case "all":
            newFilter = INITIAL_STATE.shoesFilter;
            break;
          case FILTER_SNEAKER:
            newFilter = INITIAL_STATE.shoesFilter.filter((i) => (i !== FILTER_SHOES_SELECTIONS.FILTER_DR_MARTENS))
            break;
          case FILTER_BOOTS:
            newFilter = INITIAL_STATE.shoesFilter.filter((i) => (i === FILTER_SHOES_SELECTIONS.FILTER_DR_MARTENS))
            break;
          case FILTER_CHELSEA_BOOTS:
            newFilter = INITIAL_STATE.shoesFilter.filter((i) => (i === FILTER_SHOES_SELECTIONS.FILTER_DR_MARTENS))
            break;
          default:
            newFilter = action.payload.selectedFilter;
        }

        return { ...state, shoesFilter: newFilter, shoesFilterType: action.payload.selectedFilter };
      } else if (action.payload.type === FILTER_ACCESSORIES) {
        newFilter = action.payload.selectedFilter === "all" ? INITIAL_STATE.accessoriesFilter : action.payload.selectedFilter;

        return { ...state, accessoriesFilter: newFilter, accessoriesFilterType: action.payload.selectedFilter };
      } else {
        return { ...state };
      }
    default:
      return { ...state };
  }
}
