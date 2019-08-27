'use strict';

const GrandCategoryModel = require('../../models/GrandCategory');

/**
 * Grand Category Controller
 *
 * @author  Nargis Parween <nargislife@gmail.com>
 * @version Grand Category Controller
 * @since   27th August, 2019
 */

module.exports = {
    /**
     * Method to Call Add View
     */
    getAddCategory: (request, response) => {
        response.render('grandCategory/addGrandCategory');
    },

    /**
     * Method to Add New Grand Category
     */
    createGrandCategory: async(request, response) => {
        // TODO: Validation
        const result = await GrandCategoryModel.insertMany({
            name: request.body.name
        });

        response.redirect('/all/grand-categories');
    },

    /**
     * Method to get all Grand Categories List
     */
    getAllGrandCategories: async(request, response) => {
        const result = await GrandCategoryModel.find({});

        response.render('grandCategory/viewGrandCategories', {
            'grandCategories': JSON.parse(JSON.stringify(result))
        });
    },

    /**
     * Method to get Grand Category By Id
     */
    getGrandCategoryById: async(request, response) => {
        const result = await GrandCategoryModel.findById({_id: request.params.id});
        
        response.render('grandCategory/editGrandCategory', {
            'grandCategory': result
        });
    },

    /**
     * Update Grand Category By Id
     */
    updateGrandCategoryById: async(request, response) => {
        await GrandCategoryModel.updateOne({_id: request.body.id}, {
            name: request.body.name
        });

        response.redirect('/all/grand-categories');
        
    },

    /**
     * Soft Delete of Grand Category
     */
    deleteGrandCategoryById: async(request, response) => {
        await GrandCategoryModel.updateOne({_id: request.body.id}, {
            status: false
        });

        response.redirect('/all/grand-categories');
    }
}