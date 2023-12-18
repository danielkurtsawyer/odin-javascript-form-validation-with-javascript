# odin-javascript-form-validation-with-javascript
Github repository for the javascript form validation mini-project from the Odin Project's JavaScript course. 

This was a fairly straightforward project that involved using JavaScript for manual form validation. 
Client-side form validation was achieved through the use of the Constraint Validation API along with event listeners on the input. 

Each time an input is changed, we check the validity of the input value using the Constraint Validation API. 
If a constraint is not met, then we update the error message appropriately and display it to the user.
If all constraints are met, then any error messages are removed. 
On form submission, the validity of the entire form is checked, and if any inputs are not valid, then the form will not submit and display any relevant error messages. 
Only if all inputs are valid will the form submit. 

The :invalid and :valid pseudo-classes were used to style the inputs appropriately based on their constraints. 