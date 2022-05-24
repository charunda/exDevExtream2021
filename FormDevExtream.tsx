import React from 'react';
 
import 'devextreme/dist/css/dx.light.css';
 
import Form from 'devextreme-react/form';
 
class App extends React.Component {
    employee: {
        firstName: 'John',
        lastName: 'Heart'
    }
 
    customizeItem(item) {
        if (item.dataField === "FirstName" || item.dataField === "LastName") {
            item.validationRules = [{
                type: "required",
                message: "The value is required"
            }, {
                type: "pattern",
                pattern: "^[a-zA-Z]+$",
                message: "The value should not contain digits"
            }]
        }
    }
 
    render() {
        return (
            <Form
                formData={this.employee}
                customizeItem={this.customizeItem}>
            </Form>
        );
    }
}
export default App;
