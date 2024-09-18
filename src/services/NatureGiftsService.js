import useHttp from "../hooks/http.hook"

const useNatureGiftsService = () => {
    const {loading, request, error, clearError} = useHttp()

    const _apiBase = "https://dary-prirody.org/reactapi/"
    const _authorization = import.meta.env.VITE_AUTH

    const getCategoryProducts = async (category_id = 0) => {
        const res = await request(`${_apiBase}getCategoryProducts/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                authorization: _authorization,
                category_id: category_id,
            })
        })

        return res
    }

    const getFavorites = async () => {
        const res = await request(`${_apiBase}getFavorites/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                authorization: _authorization,
            })
        })

        return res
    }

    const addFavorite = async (product_id) => {
        const res = await request(`${_apiBase}addFavorite/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                authorization: _authorization,
                product_id
            })
        })

        return res
    }

    const deleteFavorite = async (product_id) => {
        const res = await request(`${_apiBase}deleteFavorite/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                authorization: _authorization,
                product_id
            })
        })

        return res
    }

    return {
        loading,
        error,
        clearError,
        getCategoryProducts,
        getFavorites,
        addFavorite,
        deleteFavorite
    }
}

export default useNatureGiftsService