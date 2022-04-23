import Favorite from "../models/Favorite"


export const createFavs = async (req, res) => {

    const { title, description, link } = req.body

    const newFavorite = new Favorite({ title, description, link })

    const favoriteSaved = await newFavorite.save()

    res.status(201).json(favoriteSaved)

}
export const getFavs = async (req, res) => {
    const favorite = await Favorite.find();
    res.status(200).json(favorite)
}
export const getFavsById = async (req, res) => {
    const favorite = await Favorite.findById(req.params.id);
    res.status(200).json(favorite)
}
export const updateFavsById = async (req, res) => {
    const updateFavorite = await Favorite.findByIdAndUpdate(req.params._id, req.body, {
        new: true
    });
    res.status(200).json(updateFavorite)
}
export const deleteFavsById = async (req, res) => {
    const { id } = req.params;
    await Favorite.findByIdAndDelete(id)
    res.status(204).json()
}