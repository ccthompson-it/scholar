const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const connection = require('knex')(config)

module.exports = {
  getAllTeachers,
  getTeachersForClass,
  getTeacherProfile,
  getClassesByTeacher,
  updateTeacherProfile,
  addTeacher,
  deleteTeacher,
  addTeachable,
  deleteTeachable,
  getClassArea,
}

function getAllTeachers(db = connection) {
  return db('teachable')
    .innerJoin('teachers', 'teachable.teacher_id', '=', 'teachers.teacher_id')
    .innerJoin('classes', 'teachable.class_id', '=', 'classes.class_id')
    .select(
      'teachers.firstname',
      'teachers.lastname',
      'teachers.email',
      'classes.class_name',
      'classes.class_area',
      'teachable.level'
    )
}

function getTeachersForClass(className, db = connection) {
  return db('teachable')
    .innerJoin('teachers', 'teachable.teacher_id', '=', 'teachers.teacher_id')
    .innerJoin('classes', 'teachable.class_id', '=', 'classes.class_id')
    .select(
      'teachers.firstname',
      'teachers.lastname',
      'teachers.email',
      'classes.class_name',
      'classes.class_area',
      'teachable.level'
    )
    .where('classes.class_name', className)
}

function getTeacherProfile(db = connection) {
  return db('teachers').select('firstname', 'lastname', 'email', 'hash')
}

function getClassesByTeacher(teacherId, db = connection) {
  return db('teachable')
    .innerJoin('classes', 'teachable.class_id', '=', teacherId)
    .select(
      'classes.class_name',
      'classes.class_area',
      'teachable.level'
    )
}

function updateTeacherProfile(teacherId, teacherProfile, db = connection) {
  return db('teachers').where({ teacher_id: teacherId }).update(teacherProfile)
}

function addTeacher(teacherProfile, db = connection) {
  return db('teachers').insert(teacherProfile)
}

function deleteTeacher(teacherId, db = connection) {
  db('teachable')
    .where('teacher_id', teacherId)
    .del()

  return db('teachers')
    .where('teacher_id', teacherId)
    .del()
}

function addTeachable(teacher_id, class_id, level, db = connection) {
  return db('teachable').insert({
    teacher_id, class_id, level
  })
}

function deleteTeachable(teacherId, classId, db = connection) {
  return db('teachable')
    .where({
      teacher_id: teacherId,
      class_id: classId
    })
    .del()
}

function getClassArea(classArea, db = connection) {
  return db('classes').select('class_name').where('class_area', classArea)
}
