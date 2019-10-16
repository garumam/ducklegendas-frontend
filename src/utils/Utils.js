import { ROUTES } from 'utils/RoutePaths';
// 10  offset = 100 100%100 = 0
export const Paginator = (items, page) => {
    page = page || 0;
    let per_page = 10;
    let offset = page * per_page;
    offset = offset >= 100 ? offset % 100 : offset;
    return items.slice(offset).slice(0, per_page);
  };

export const getBackendUriBase = (path) => {
  let baseUri = path;
  baseUri = baseUri.replace(`${ROUTES.DASHBOARD.HOME}/`, "");
  if(baseUri.indexOf("/") !== -1){
    baseUri = baseUri.substring(0,baseUri.indexOf("/"));
  }
  return baseUri;
}

export const setInputsParams = (labels, types, names, dataPassed, data) => {
  const inputParams = [],
    initialValues = {};

  for (let index = 0; index < labels.length; index++) {
    inputParams.push({
      label: labels[index],
      type: types[index],
      name: names[index]
    });

    initialValues[names[index]] = dataPassed
      ? dataPassed[names[index]]
      : data.values
      ? data.values[names[index]]
      : "";
  }
  Object.keys(initialValues).map(key =>
    initialValues[key] ? null : (initialValues[key] = "")
  );

  return [inputParams, initialValues];
}

export const prepareCategories = (categories) => {
  return categories && categories.map((category) => ({
    label : category.name , value : category.id
   })
 );
}
