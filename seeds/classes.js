
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {class_id: 1, class_name: 'English', class_area: 'Literacy'},
        {class_id: 2, class_name: 'Statistics', class_area: 'Mathematics'},
        {class_id: 3, class_name: 'Physics', class_area: 'Science'},
        {class_id: 4, class_name: 'Biology', class_area: 'Science'},
        {class_id: 5, class_name: 'Chemistry', class_area: 'Science'},
        {class_id: 6, class_name: 'Geography', class_area: 'Science'},
        {class_id: 7, class_name: 'History', class_area: 'Literacy'},
        {class_id: 8, class_name: 'Accounting', class_area: 'Mathematics'},
        {class_id: 9, class_name: 'Business Studies', class_area: 'Mathematics'},
        {class_id: 10, class_name: 'Computer Science', class_area: 'Technology'},
        {class_id: 11, class_name: 'Electronics', class_area: 'Technology'},
        {class_id: 12, class_name: 'Graphics', class_area: 'Technology'},
        {class_id: 13, class_name: 'Woodwork', class_area: 'Technology'},
        {class_id: 14, class_name: 'Media', class_area: 'Literacy'},
        {class_id: 15, class_name: 'Music', class_area: 'The Arts'},
        {class_id: 16, class_name: 'Cooking', class_area: 'Social'},
        {class_id: 17, class_name: 'Hospitality', class_area: 'Social'},
        {class_id: 18, class_name: 'Sewing', class_area: 'Technology'},
        {class_id: 19, class_name: 'Painting', class_area: 'The Arts'},
        {class_id: 20, class_name: 'Dance', class_area: 'The Arts'},
        {class_id: 21, class_name: 'Drama', class_area: 'The Arts'},
        {class_id: 22, class_name: 'Photography', class_area: 'The Arts'},
        {class_id: 23, class_name: 'German', class_area: 'Languages'},
        {class_id: 24, class_name: 'French', class_area: 'Languages'},
        {class_id: 25, class_name: 'Japanese', class_area: 'Languages'},
        {class_id: 26, class_name: 'Spanish', class_area: 'Languages'},
        {class_id: 27, class_name: 'Latin', class_area: 'Languages'},
        {class_id: 28, class_name: 'Probability', class_area: 'Mathematics'},
        {class_id: 29, class_name: 'Algebra', class_area: 'Mathematics'},
        {class_id: 30, class_name: 'Health', class_area: 'Social'},
        {class_id: 31, class_name: 'Agriculture', class_area: 'Science'},
        {class_id: 32, class_name: 'Space Science', class_area: 'Science'},
        {class_id: 33, class_name: 'Law', class_area: 'Social'},
        {class_id: 34, class_name: 'Metalwork', class_area: 'Technology'},
        {class_id: 35, class_name: 'Construction', class_area: 'Technology'}
      ]);
    });
};
