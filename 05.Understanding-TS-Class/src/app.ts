class Department {
  // private id: string
  // name: string
  // pivateはそのクラスの中のメソッドからしかアクセスができないもの
  private employees: string[] = []

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

const accounting = new Department('d1', 'Accounting')

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.describe()
accounting.printEmployeeInfomation()

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }

// accountingCopy.describe()
