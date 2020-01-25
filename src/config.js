// export const HTML_URL = "http://112.124.203.191:3000";
export const HTML_URL = "http://127.0.0.1:3000";
export const TEACHER = HTML_URL + "/teacher";
export const TEACHER_ALL = TEACHER + "/teacherall";
export const TEACHER_REGISTER = TEACHER + "/register";
export const TEACHER_LOGIN = TEACHER + "/login";
export const TODO_UPLOAD = HTML_URL + "/scadule/upload";
export const TODO_GET = HTML_URL + "/scadule/info";
export const DATE_QUERY = HTML_URL + "/scadule/datequery";
export const baseField = [
  {
    key: "base-01",
    id: "teacher",
    type: "text",
    label: "老师",
    defaultValue: "noname"
  },
  {
    key: "base-02",
    id: "type",
    type: "text",
    label: "事件类型",
    defaultValue: "buke"
  },
  {
    key: "base-03",
    id: "date",
    type: "date",
    label: "日期",
    defaultValue: "2020-02-01"
  },
  {
    key: "base-04",
    id: "timeBegin",
    type: "time",
    label: "开始时间",
    defaultValue: "08:30"
  },
  {
    key: "base-05",
    id: "timeEnd",
    type: "time",
    label: "结束时间",
    defaultValue: "21:00"
  }
];
export const payloadInfo = {
  makeUp: [
    {
      key: "mk-01",
      id: "class",
      label: "班级"
    },
    {
      key: "mk-02",
      id: "oldTeacher",
      label: "原讲师"
    },
    {
      key: "mk-03",
      id: "classType",
      label: "课程类型"
    },
    {
      key: "mk-04",
      id: "lesson",
      label: "课次"
    },
    {
      key: "mk-05",
      id: "lessonName",
      label: "课程主题"
    },
    {
      key: "mk-06",
      id: "teacherIncharge",
      label: "班主任"
    }
  ],
  formal: [],
  parentMeeting: [],
  teacherMeeting: [],
  training: [],
  experience: [],
  others: []
};

export const dateQueryInfo = [
  {
    key: "dq-01",
    id: "dateBegin",
    label: "开始日期",
    defaultValue: "2020-02-01",
    type: "date"
  },
  {
    key: "dq-02",
    id: "dateEnd",
    label: "结束日期",
    defaultValue: "2020-02-07",
    type: "date"
  }
];
