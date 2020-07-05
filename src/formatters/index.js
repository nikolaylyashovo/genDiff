import _ from 'lodash';
import renderDefault from './formater-default';
import renderPlain from './formater-plain';
import renderJson from './formater-json';
import renderIni from './formater-ini';
import renderYaml from './formater-yaml';

const formatList = {
  plain: renderPlain,
  json: renderJson,
  default: renderDefault,
  ini: renderIni,
  yaml: renderYaml,
};

const getRender = (format) => {
  if (!_.has(formatList, format)) {
    throw new Error('no such format in the formatList');
  }
  return formatList[format];
};

export default getRender;
