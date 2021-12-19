import axiosBase from "./axiosBase";

export function getSubjects() {
	return axiosBase.get("/subjects");
}


