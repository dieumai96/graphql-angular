
const Employee = require('../../models/employee');
const utils = require('../../lib/utils')
const CONST = require('../../lib/constant');
const Building = require('../../models/building');
module.exports = {
    createBuilding: async  args => {
        let { address, blocks, code, diaChinh, hotLine, image, name, status, totalFlat } = args.buildingInput;
        const building = new Building({
            address,
            blocks,
            code,
            diaChinh,
            hotLine,
            image,
            name,
            status,
            totalFlat,
            createdID: "5cd3ed81161ec21361a85020",
        })
        try {

            const existsBuilding = await Building.findOne({ code: code });
            if (existsBuilding) {
                throw new Error("Toa nha nay da ton tai");
            }
            else {
                const result = await building.save();
                return {
                    ...result._doc,
                    building : result,
                }
            }
        } catch (error) {
            throw error;
        }


    }
}