require 'rails_helper'

 

RSpec.describe WidgetsController, type: :controller do

   
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }
 
  let(:valid_session) { {} }

  describe "GET #index" do
    it "returns a success response" do
      Widget.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "GET #show" do
    it "returns a success response" do
      widget = Widget.create! valid_attributes
      get :show, params: {id: widget.to_param}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "GET #new" do
    it "returns a success response" do
      get :new, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "GET #edit" do
    it "returns a success response" do
      widget = Widget.create! valid_attributes
      get :edit, params: {id: widget.to_param}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Widget" do
        expect {
          post :create, params: {widget: valid_attributes}, session: valid_session
        }.to change(Widget, :count).by(1)
      end

      it "redirects to the created widget" do
        post :create, params: {widget: valid_attributes}, session: valid_session
        expect(response).to redirect_to(Widget.last)
      end
    end

    context "with invalid params" do
      it "returns a success response (i.e. to display the 'new' template)" do
        post :create, params: {widget: invalid_attributes}, session: valid_session
        expect(response).to be_successful
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested widget" do
        widget = Widget.create! valid_attributes
        put :update, params: {id: widget.to_param, widget: new_attributes}, session: valid_session
        widget.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the widget" do
        widget = Widget.create! valid_attributes
        put :update, params: {id: widget.to_param, widget: valid_attributes}, session: valid_session
        expect(response).to redirect_to(widget)
      end
    end

    context "with invalid params" do
      it "returns a success response (i.e. to display the 'edit' template)" do
        widget = Widget.create! valid_attributes
        put :update, params: {id: widget.to_param, widget: invalid_attributes}, session: valid_session
        expect(response).to be_successful
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested widget" do
      widget = Widget.create! valid_attributes
      expect {
        delete :destroy, params: {id: widget.to_param}, session: valid_session
      }.to change(Widget, :count).by(-1)
    end

    it "redirects to the widgets list" do
      widget = Widget.create! valid_attributes
      delete :destroy, params: {id: widget.to_param}, session: valid_session
      expect(response).to redirect_to(widgets_url)
    end
  end

end
