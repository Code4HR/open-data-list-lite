Datasets = new Meteor.Collection("datasets");
Comments = new Meteor.Collection("comments");

// ZoneReports.allow({
//   insert : function () { return true; }
// });

// ZoneReports.deny({
//   update : function () { return true; },
//   remove : function () { return true; }
// });

if (Meteor.isClient) {

///////////////////////////////////////////////////////////////////////////////
// Create Report dialog

var openCreateDialog = function () {
  Session.set("showCreateDialog", true);
};

var closeCreateForm = function () {
  Session.set("showCreateDialog", false);
};

Template.page.showCreateDialog = function () {
  return Session.get("showCreateDialog");
};

Template.navbar.showCreateDialog = function () {
  return Session.get("showCreateDialog");
};

Template.listDatasets.linkText = function () {
  if (this.link.length > 50) {
    return this.link.substring(0,50)+"...";
  } else {
    return this.link;
  }
};

Template.listDatasets.datasets = function () {
  return Datasets.find({}, {});
};

Template.navbar.events({
  'click .btn-add' : function () {
    openCreateDialog();
  }
});

Template.heroBanner.events({
  'click .btn-add' : function () {
    openCreateDialog();
  }
});

Template.listDatasets.events({
  'click .remove': function () {
    Datasets.remove(this._id);
    return false;
  }
});

Template.createDialog.events({

  'click .save' : function () {
    // template data, if any, is available in 'this'

    if (typeof console !== 'undefined') {  // why do I do this first? TODO: check usage
      console.log("You pressed submit");
      // console.log("captain : " + document.getElementById("zoneCaptain").value);
      // console.log("trash pickup : " + document.getElementById("trashPickup").checked);
      // console.log("picnic : " + document.getElementById("picnic").checked);
      Datasets.insert({
        name: document.getElementById("name").value,
        org: document.getElementById("org").value,
        description: document.getElementById("description").value,
        link: document.getElementById("link").value,
        createdAt: new Date()
      });
    }
    closeCreateForm();
    },

    'click .cancel' : function () {
      closeCreateForm();
    }
  });
}

