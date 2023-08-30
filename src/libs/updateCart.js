import arrayToObject from "./arrayToObject";
import createNotificationWithImage from "./create_notification";

function update_cart(data, cart) {
    let updated = {};
    let updated_versions = arrayToObject(data); // convert the array in to an object of keys = _id
    let keys = Object.keys(cart);
    // console.log(data, cart)
    keys.forEach((key) => {
        let item = cart[key];
        let item_size = item.size; // get the item size
        let parent_id = item.parent_id; // get its parent id
        let to_update_item_object = updated_versions[parent_id]; // get the updated version using its parent id

        let variety = arrayToObject(to_update_item_object.varieties)[item._id]
            .sizes; //convert the varieties and then with items id gets the sizes of the item
        let varieties_sizes = arrayToObject(variety, "size"); // convert the array in to an object of keys = size
        //  console.log(varieties_sizes, 'sizesz', item_size)
        let variety_quantity = varieties_sizes[item_size].qty; // get the sizen of the variety then the quantity

        let quantity = item.quantity_for_cart; // get the current quantity for the cart
        if (variety_quantity === 0) {
            let no = localStorage.getItem("no");
            localStorage.setItem("no", no == 0 ? 0 : (no - quantity));
            //alert("Sorry the item '" + item.name + "' size: " + item.size + " is sold out and has been removed from your cart ") // if the item is expended delete it from the  cart by not updateing it
            createNotificationWithImage(
                "Notification from Glitzabelle Label",
                "Sorry the item '" +
                item.name +
                "' size: " +
                item.size +
                " is sold out and has been removed from your cart ",
                item.image
            );
            return;
        }
        if (quantity > variety_quantity) {
            let diff = quantity - variety_quantity;
            let no = localStorage.getItem("no");
            localStorage.setItem("no", no - diff);
            let new_qty = variety_quantity; //
            item.quantity_for_cart = new_qty; // else set the quantity of the item as the variety quantity
            //  return
        }
        //delete unneccesry fields
        delete to_update_item_object._id;
        delete to_update_item_object.updatedAt;
        delete to_update_item_object.createdAt;
        delete to_update_item_object.varieties;
        delete to_update_item_object.mainImage;
        delete to_update_item_object.id;
        // console.log(to_update_item_object)
        let new_version = {...item, ...to_update_item_object }; //generate the new version
        //  console.log(new_version)
        updated[key] = new_version; // using the initial key update the 'updated 'objetc
    });

    return updated;
}

export default update_cart;
art;