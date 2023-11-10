// @ts-nocheck

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(array, comparator) {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  // console.log(stabilizedThis);
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis?.map((el) => el[0]);
}

export const dynamicRenderer = (
  children?: (item: Record<string, any>) => React.ReactNode,
  item: Record<string, any>,
  value: string
) => {
  // console.log(item);
  if (value === "actions") {
    return children(item);
  } else {
    return item[value];
  }
};

export const selectKeys = <T extends Record<string, any>>(
  items: T[],
  selectedKeys: (keyof T)[]
): Partial<T>[] => {
  return items?.map(item => {
    return selectedKeys.reduce((filteredItem, key) => {
      if (item.hasOwnProperty(key)) {
        filteredItem[key] = item[key];
      }
      return filteredItem;
    }, {} as Partial<T>);
  });
};
