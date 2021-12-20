import axiosBase from "./axiosBase";

export function getSubjects() {
  return axiosBase.get("/subjects");
}

export function getProfessorsBySubject(subjectId) {
  return axiosBase.get(`/professors?subjectId=${subjectId}`);
}

export function getCategories() {
  return axiosBase.get("/categories");
}

export function postExam(examBody) {
  return axiosBase.post("/exams", examBody);
}
