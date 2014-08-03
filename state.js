var user_states = init_user_states();

function init_user_states() {
    return {
        "dtran": get_default_user_state("dtran"),
    }
}

function add_user(user) {
    // Initialize users array if necessary
    if (user_states == null) {
        user_states = {};
    }

    // Add user if necessary
    if (user_states[user] == null) {
        user_states[user] = get_default_user_state(user);
    }
}

function remove_user(user) {
    delete user_states[user];
}

function update_user_fields(user, updated_fields) {
    user_states[user] = updated_fields;
    // TODO(joe) add logic to update various fields in specific ways (such as the video)
}

// Sample default user state
function get_default_user_state(user) {
    return {
        "name": user,
        "alarm_ts": Date.now()-600000,
        "awake": false,
        "awake_ts": null,
        "video": "https://www.youtube.com/watch?v=fWNaR-rxAic",
        "video_start_ts": Date.now()-120000 
    }
}

module.exports.init_user_states = function() {
    return init_user_states();
}

module.exports.add_user = function(user) {
    return add_user(user);
}

module.exports.remove_user = function(user) {
    return remove_user(user);
}

module.exports.update_user_fields = function(user, updated_fields) {
    return update_user_fields(user, updated_fields);
}

module.exports.get_default_user_state = function(user) {
    return get_default_user_state(user);
}

module.exports.user_states = user_states