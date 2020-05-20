import axios from "axios";
import _ from "lodash";
import { restURL } from "../../../common/rest_urls";
import { NAMESPACE } from "./chartConsts";

const pageURL = `${restURL}/${NAMESPACE}`;
const saveURL = `${pageURL}/`;
const deleteURL = `${pageURL}/delete`;
const listURL = `${pageURL}/list`;
const byIdURL = `${pageURL}/id`;

export const serviceSave = (values) => axios.post(`${saveURL}`, values);

export const serviceDelete = (data) =>
  axios.delete(`${deleteURL}?roleid=${data.roleId}`);
export const serviceList = (criteria) => axios.get(`${listURL}`, criteria);
export const serviceById = (data) =>
  axios.get(`${restURL}/roles/${data.roleId}`);
export const serviceUpdate = (data) =>
  axios.patch(`${restURL}/roles/?roleid=${data.roleId}`, data);
