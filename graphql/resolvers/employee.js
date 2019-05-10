const bcrypt = require('bcryptjs');


const Employee = require('../../models/employee');
const utils = require('../../lib/utils')
const CONST = require('../../lib/constant');
module.exports = {
  createEmployee: async args => {
    try {
      const existingEmployee = await Employee.findOne({ phone: args.employeeInput.phone });
      if (existingEmployee) {
        throw new Error('User exists already.');
      }
      const hashedPassword = await bcrypt.hash(args.employeeInput.password, 12);

      const { phone, email, birthDate, fullName, avatar, note, roles } = args.employeeInput;
      const employee = new Employee({
        phone,
        email,
        password: hashedPassword,
        birthDate,
        fullName,
        avatar,
        note,
        status: CONST.STATUS.ACTIVE,
        fullNameKhongDau: utils.locDau(fullName),
        roles

      });

      const result = await employee.save();
      console.log(result);

      return { ...result._doc, password: null, _id: result.id, fullNameKhongDau: result.fullNameKhongDau, roles: result.roles };
    } catch (err) {
      throw err;
    }
  },
  updateEmployee: async args => {
    try {
      const employee = await Employee.findById(args.employeeInput.employeeID);
      if (!employee) {
        throw new Error("User not found");
      }
      const { email, roles, birthDate, fullName, avatar, note } = args.employeeInput;
      employee.email = email ? email : employee.email;
      employee.roles = roles ? roles : employee.roles;
      employee.birthDate = birthDate ? birthDate : employee.birthDate;
      employee.fullName = fullName ? fullName : employee.fullName;
      employee.avatar = avatar ? avatar : employee.avatar;
      employee.note = note ? note : employee.note;
      employee.fullNameKhongDau = fullName ? utils.locDau(fullName) : employee.fullNameKhongDau;
      const result = await employee.save();
      return {
        ...result._doc,
        fullName: result.fullName,
        roles: result.roles,
        _id: result.id
      }
    } catch (error) {
      throw error;
    }
  },
  employees: async () => {
    try {
      const employees = await Employee.find();
      return employees.map(employee => {
        return {
          ...employee._doc,
          employee
        };
      });
    } catch (err) {
      throw err;
    }
  },

  deleteEmployee: async ({ id }) => {
    try {
      const employee = await Employee.findOne({ _id: id });
      console.log(employee);
      if (!employee) {
        return {
          status: 1,
          msg: 'Người dùng không tồn tại'
        }
      }
      employee.status = CONST.STATUS.DELETE;
      const result = await employee.save();
      return {
        status: 0,
        msg: 'Cap nhat thong tin ca nhan thanh cong'
      }
    } catch (error) {
      return {
        status : 0,
        msg : "Co loi xay ra, vui long thu lai sau"
      }
    }
  },
  getEmployee : async({id}) => {
    try {
      const result = await Employee.findOne({_id : id});
      if(!result){
       throw new Error("Khong tim thay thong tin nguoi dung")
      }else{
        return { ...result._doc, password: null, _id: result.id, fullNameKhongDau: result.fullNameKhongDau, roles: result.roles };
      }
    } catch (error) {
      throw error
    }
  }
}