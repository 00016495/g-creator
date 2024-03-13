import { readFileCustom } from "../helpers/read-helper.js"
import { writeFileCustom } from "../helpers/write-helper.js"

export default {
    MAIN_PAGE: (_, res) => {
        const allGroups = readFileCustom('groups.json')
        res.render('main.ejs', { allGroups })
    },
    CREATE_GROUPS: (req, res) => {
        const { group_name, group_size } = req.body

        const allGroups = readFileCustom('groups.json')

        if (allGroups.find(group => group.group_name == group_name)) {
            return res.status(400).json({
                message: "Group already exists"
            })
        } else {
            allGroups.push({
                id: allGroups.at(-1)?.id + 1 || 1,
                group_name,
                group_size
            })

            writeFileCustom('groups.json', allGroups)

            res.redirect('/api/main')
        }
    },
    UPDATE_GROUP: (req, res) => {
        const { id } = req.params
        const { group_name, group_size } = req.body

        if (!group_name || !group_size) {
            return res.status(400).json({ message: "Group name and size are required" });
        }

        const allGroups = readFileCustom('groups.json')

        const groupIndex = allGroups.findIndex(group => group.id == +id)

        if (groupIndex == -1) {
            return res.status(404).json({
                message: "Group not found"
            })
        } else {
            allGroups[groupIndex] = {
                id: +id,
                group_name,
                group_size
            }

            writeFileCustom('groups.json', allGroups)

            res.redirect('/api/main');
        }
    },

    DELETE_GROUP: (req, res) => {
        const { id } = req.params

        const allGroups = readFileCustom('groups.json')

        const groupIndex = allGroups.findIndex(group => group.id == id)

        if (groupIndex == -1) {
            return res.status(404).json({
                message: "Group not found"
            })
        } else {
            allGroups.splice(groupIndex, 1)

            writeFileCustom('groups.json', allGroups)

            res.redirect('/api/main')
        }
    }
}
