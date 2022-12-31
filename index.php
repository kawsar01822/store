<?php include("include/header.php");?>
<?php include("include/menu.php");?>
    
    <div class="container">
        <div class="row p-3">
            <h1 class="display-6 fw-normal mx-auto text-center">Add Vendor</h1>
            <div class="col-md-8 offset-md-2">
                <div class="alert alert-success" role="alert" id="successMsg"></div>
                <div class="alert alert-danger" role="alert" id="errorMsg"></div>
                <form class="row g-3">
                    <div class="col-12">
                        <div class="input-group">
                          <div class="input-group-text">Vendor Name</div>
                          <input type="text" class="form-control" id="vendorName" placeholder="Omuk Group of Industries" aria-describedby="vendorHelp">
                        </div>
                        <div id="vendorHelp" class="form-text text-danger"></div>
                    </div>
                    <div class="col-12">
                        <div class="input-group">
                          <div class="input-group-text">Phone No</div>
                          <input type="number" class="form-control" id="phone" placeholder="01..." aria-describedby="phoneHelp">
                        </div>
                        <div id="phoneHelp" class="form-text text-danger"></div>
                    </div>
                    <div class="col-12">
                        <div class="input-group">
                          <div class="input-group-text">Email Address</div>
                          <input type="email" class="form-control" id="email" placeholder="meghna@gmail.com" aria-describedby="emailHelp">
                        </div>
                        <div id="emailHelp" class="form-text text-danger"></div>
                    </div>
                    <div class="col-12">
                        <div class="input-group">
                          <div class="input-group-text">Office Address</div>
                          <input type="text" class="form-control" id="address" placeholder="Agrabad, Chittagong" aria-describedby="officeHelp">
                        </div>
                        <div id="officeHelp" class="form-text text-danger"></div>
                    </div>
                    <div class="col-12">
                      <button type="button" class="btn btn-primary" id="addVendor">Add</button>
                      <input type='hidden' id='updateVendorId' value=''>
                      <button type="button" class="btn btn-primary" id="updateVendor">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <hr/>

    <div class="container-fluid">
        <div class="row p-3">
            <div class="table-responsive col-md-8 offset-md-2">
                <table id="vendor" class="table table-striped" style="width:100%">
                <h1 class="display-6 fw-normal mx-auto text-center">Vendor List</h1>
                    <thead class="thead-dark">
                        <tr>
                            <th>Vendor Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Office Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <hr/>

<?php include("include/footer.php");?>