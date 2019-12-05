class CreateAppointment < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
    	t.belongs_to :physician, index: true
    	t.belongs_to :patient, index: true
      t.datetime :appointment_date
      t.timestamps
    end
  end
end
