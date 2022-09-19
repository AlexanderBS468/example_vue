var APP_LOG_LIFECYCLE_EVENTS = true;

var webstore = new Vue({
	el: "#app",
	data: function() {
return {
		sitename: "Vue.js Pet Depot",
	};
},
	beforeCreate: function() {
		if (APP_LOG_LIFECYCLE_EVENTS) {
			console.log("beforeCreate");
		}
	},
	created: function() {
		if (APP_LOG_LIFECYCLE_EVENTS) {
			console.log("created");
		}
	},
	beforeMount: function() {
		if (APP_LOG_LIFECYCLE_EVENTS) {
			console.log("beforeMount");
		}
	},
	mounted:  function() {
		if (APP_LOG_LIFECYCLE_EVENTS) {
			console.log("mounted");
		}
	},
	beforeUpdate:  function() {
		if (APP_LOG_LIFECYCLE_EVENTS) {
			console.log("beforeUpdate");
		}
	},
	updated:  function() {
		if (APP_LOG_LIFECYCLE_EVENTS) {
			console.log("updated");
		}
	},
	beforeUnmount:  function() {
		if (APP_LOG_LIFECYCLE_EVENTS) {
			console.log("beforeDestroy ");
		}
	},
	unmounted:  function() {
		if (APP_LOG_LIFECYCLE_EVENTS) {
			console.log("destroyed");
		}
	}
});