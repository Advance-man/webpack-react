import _ from "lodash";
export default function  increment(...arg) {
  return _.sum(arg);
}