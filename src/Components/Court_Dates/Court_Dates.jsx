import React from 'react';
import './Court_Dates.css';
import 'bootstrap'

const Court_Dates = () => {
  return (
    <div>
    <div class="container mt-4">
    <div class="row">
        <div class="col-3">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                <div class="dropdown">
                    <a class="nav-link dropdown-toggle" id="v-pills-dropdown-tab" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div class="dropdown-menu" aria-labelledby="v-pills-dropdown-tab">
                        <a class="dropdown-item" id="v-pills-option1-tab" data-toggle="pill" href="#v-pills-option1" role="tab" aria-controls="v-pills-option1" aria-selected="false">Option 1</a>
                        <a class="dropdown-item" id="v-pills-option2-tab" data-toggle="pill" href="#v-pills-option2" role="tab" aria-controls="v-pills-option2" aria-selected="false">Option 2</a>
                    </div>
                </div>
                <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
            </div>
        </div>
       
    </div>
</div>

    </div>
  )
}

export default Court_Dates

