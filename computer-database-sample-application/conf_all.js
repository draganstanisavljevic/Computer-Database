// conf.js
exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/main_page_spec.js', 'specs/add_new_computer_view_spec.js', 'specs/add_new_computer_validation_spec.js', 'specs/add_new_computer_submit_valid_data_spec.js', 'specs/total_counter_spec.js']
}