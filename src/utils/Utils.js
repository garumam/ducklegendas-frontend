// 10  offset = 100 100%100 = 0
export const Paginator = (items, page) => {
    page = page || 0;
    let per_page = 10;
    let offset = page * per_page;
    offset = offset >= 100 ? offset % 100 : offset;
    return items.slice(offset).slice(0, per_page);
  };