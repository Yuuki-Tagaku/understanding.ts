class Department {
  static fiscalYear = 2020
  // private id: string
  // name: string
  // pivateはそのクラスの中のメソッドからしかアクセスができないもの
  // private employees: string[] = []
  // protectedはprivateのように外部からのアクセスはできないが、継承したサブクラスからはアクセスできるようにする修飾子のことを言う
  protected employees: string[] = []

  static createEmployee(name: string) {
    return { name: name }
  }

  constructor(private readonly id: string, public name: string) {
    // this.id = id
    // this.name = n
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInfomation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

// Departmentクラスを継承
class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, 'IT')
    this.admins = admins
  }
}

class AccountingDepartment extends Department {
  private lastReport: string

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('レポートが見つかりません。')
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('正しい値を入力してください。')
    }
    this.addReport(value)
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
    this.lastReport = reports[0]
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text
  }

  printReports() {
    console.log(this.reports)
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return
    }
    this.employees.push(name)
  }
}

const employee1 = Department.createEmployee('Max')
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment('d1', ['Max'])

it.addEmployee('Max')
it.addEmployee('Manu')

it.describe()
it.printEmployeeInfomation()

console.log(it)

const accounting = new AccountingDepartment('d2', [])

accounting.mostRecentReport = '通気会計レポート'
accounting.addReport('Something')
console.log(accounting.mostRecentReport)
accounting.printReports()

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.printEmployeeInfomation()

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }

// accountingCopy.describe()
