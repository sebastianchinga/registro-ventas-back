import Local from "../models/Local.js"

export const listar = async (req, res) => {
    const locales = await Local.findAll();
    res.json(locales)
}

export const crear = async (req, res) => {
    const local = new Local(req.body);
    try {
        const resultado = await local.save();
        res.json(resultado)
    } catch (error) {
        res.status(400).json({ msg: error })
    }
}

export const editar = async (req, res) => {
    const { id } = req.params;
    const local = await Local.findByPk(id);
    const { direccion } = req.body
    if (!local) {
        const error = new Error('No se encontró este local');
        return res.status(400).json({ msg: error.message })
    }

    local.direccion = direccion || local.direccion

    try {
        const resultado = await local.save();
        res.json(resultado);
    } catch (error) {
        res.status(400).json({ msg: error })
    }

}

export const eliminar = async (req, res) => {
    const { id } = req.params
    const local = await Local.findByPk(id);
    if (!local) {
        const error = new Error('No se encontró este local');
        return res.status(400).json({ msg: error.message })
    }

    try {
        await local.destroy();
        res.json({ msg: 'Local eliminado correctamente' })
    } catch (error) {
        res.status(400).json({ msg: error })
    }

}