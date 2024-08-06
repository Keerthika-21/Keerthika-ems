import { Injectable } from '@angular/core';
import { Employee } from './model/Employee';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    url :string;
    employee : Employee;
    employeeArr :Employee[];
  constructor(private http : HttpClient) { //predefined service for http
      this.url = "http://localhost:3005/employees";
      this.employee = new Employee();
      this.employeeArr =[];
  }
  insertEmployee(employee : Employee){
    this.http.post<Employee>(this.url,employee).subscribe(); //post-->update method is called by http client <Employee says where ii is saving
    return "Labour Details Added"; //subscribe==>commit
  }
  updateEmployee(employee : Employee){
    this.http.put<Employee>(this.url+"/"+employee.id,employee).subscribe(); //post-->update method is called by http client <Employee says where ii is saving
    return "labour Details Updated"; //subscribe==>commit
  }
  deleteEmployee(empId : number){
    this.http.delete<Employee>(this.url+"/"+empId).subscribe(); //post-->update method is called by http client <Employee says where ii is saving
    return "labour Details Deleted";
  }
  
  findEmployee(empId : number){
    this.http.get<Employee>(this.url+"/"+empId).subscribe(data =>this.employee=data); //post-->update method is called by http client <Employee says where ii is saving
     return this.employee;
  }
  findAllEmployee(){
    this.http.get<Employee>(this.url).subscribe(data =>this.employee=data); 
    return this.employeeArr;
  }
}
