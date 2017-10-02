export export const USERNAME_ADDRESS_QUERY = (filter) => `{"username": {"regexp": "/${filter.name || ''}/i"}},
                                                            {"address": {"regexp": "/${filter.address || ''}/i"}}`;

export const getLBQuery = (filter) =>
  Object.keys(filter).reduce((sum, objectKey, i, arr) => {
    let queryPart = `{ "${objectKey}": {"regexp": "/${filter[objectKey] || ''}/i" }}`;
    if ( arr.length > i ) queryPart + ',';
    return sum + queryPart;
  }, '');
