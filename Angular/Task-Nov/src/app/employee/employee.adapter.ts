import { Employee } from "./employee.model"

export class EmployeeAdapter {

    public toResponse(item: any) {
        const employeeData: Employee = new Employee();
        employeeData.firstname = item.firstname,
          employeeData.lastname = item.lastname,
            employeeData.email = item.email,
            employeeData.phoneNo = item.phoneNo,
            employeeData.salary = item.salary,
            employeeData.id=item.id,
            employeeData.fullname = item.firstname.concat(" "+ item.lastname);
        return employeeData;
    }
}