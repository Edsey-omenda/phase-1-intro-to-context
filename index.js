// Your code here

function createEmployeeRecord([Gray, Worm, Security, payPerHour]) {
  const employeedata = {
    firstName: Gray,
    familyName: Worm,
    title: Security,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  }
  employeesDetails.unshift(employeedata)
  return employeedata
}
const employeesDetails = []
const array = [Gray, Worm, Security, payPerHour]

  function createEmployeeRecords(array) {
    const newArray = []
    array.forEach((array) => {
      const newObj = createEmployeeRecord(array)
      newArray.push(newObj)
    })
    return newArray
  }
  
  function createTimeInEvent(employee, date) {
    let hoursWorked = date.split(' ')[1]
    let YYYY_MM_DD_date  = date.split(' ')[0]
    let timeInEmployee = {
      type: "TimeIn",
      hour: parseInt(hoursWorked, 10),
      date: YYYY_MM_DD_date 
    }
    let timeInEvents = employee['timeInEvents']
    timeInEvents.push(timeInEmployee)
    return employee
  }
  
  function createTimeOutEvent(employee, date) {
    const hoursWorked = date.split(' ')[1]
    const YYYY_MM_DD_date = date.split(' ')[0]
    const timeOutEmployee = {
      type: "TimeOut",
      hour: parseInt(hoursWorked, 10),
      date: YYYY_MM_DD_date 
    }
    const timeOutEvents = employee['timeOutEvents']
    timeOutEvents.push(timeOutEmployee)
    return employee
  }

  function hoursWorkedOnDate(employee, date) {
    let timeIn =(' ')
    let timeOut =(' ')
    employee.timeInEvents.forEach((worker) => {
      if (worker['date'] === date) {
        timeIn = worker['hour']
      }
    })
    employee.timeOutEvents.forEach((worker) => {
      if (worker['date'] === date) {
        timeOut = worker['hour']
      }
    })
    let workTime = (timeOut - timeIn) / 100
    return workTime
  }
  
  function wagesEarnedOnDate(employee, date) {
    let hoursWorked = hoursWorkedOnDate(employee, date)
    let  dailyStand = hoursWorked * employee['payPerHour']
    return  dailyStand
  }
  
  function allWagesFor(employee) {
    let workRecord = employee.timeInEvents.map (worker => worker.date)
    let dailyStand = 0
    workRecord.forEach(date => {
      const fullWage = wagesEarnedOnDate(employee, date)
      dailyStand = dailyStand + fullWage
    })
    return dailyStand
  }
  
  function calculatePayroll(array) {
    let totalPayroll = 0
    array.forEach(employee => {
      totalPayroll = totalPayroll + allWagesFor(employee)
    })
    return totalPayroll
  }

function calculatePayroll(array) {
  let totalPayroll = 0
  array.forEach(employee => {
    totalPayroll = totalPayroll + allWagesFor(employee)
  })
  return totalPayroll
}
