<?php include("include/header.php");?>
<?php include("include/menu.php");?>
    
    <div class="container">
        <div class="row p-3">
            <h1 class="display-6 fw-normal mx-auto text-center">Purchase Order</h1>
            <div class="col-md-8 offset-md-2">
                <div class="alert alert-success" role="alert" id="purchaseSuccessMsg"></div>
                <div class="alert alert-danger" role="alert" id="purchaseErrorMsg"></div>
                <form class="row g-3">
                    <div class="col-12">
                        <div class="input-group">
                          <div class="input-group-text">Item Name</div>
                          <input type="text" class="form-control" id="itemName" placeholder="rice" aria-describedby="vendorHelp">
                        </div>
                        <div id="itemNameHelp" class="form-text text-danger"></div>
                    </div>
                    <div class="col-12">
                        <div class="input-group">
                          <div class="input-group-text">Item Quantity</div>
                          <input type="number" class="form-control totalCalc" id="itemQty" placeholder="3" aria-describedby="phoneHelp">
                        </div>
                        <div id="itemQtyHelp" class="form-text text-danger"></div>
                    </div>
                    <div class="col-12">
                        <div class="input-group">
                          <div class="input-group-text">Unit Price</div>
                          <input type="number" class="form-control totalCalc" id="unitPrice" placeholder="115" aria-describedby="emailHelp">
                        </div>
                        <div id="unitPriceHelp" class="form-text text-danger"></div>
                    </div>
                    <div class="col-12">
                        <div class="input-group">
                          <div class="input-group-text">Total Price</div>
                          <input type="text" class="form-control" id="totalPrice" value="0" disabled>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="input-group">
                          <div class="input-group-text">Vendor Name</div>
                          <select id="vendorList" class="form-control"></select>
                        </div>
                        <div id="vendorListeHelp" class="form-text text-danger"></div>
                    </div>
                    <div class="col-12">
                      <button type="button" class="btn btn-primary" id="order">Order</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <hr/>

    <div class="container-fluid">
        <div class="row p-3">
            <div class="table-responsive col-md-8 offset-md-2">
                <table id="purchase" class="table table-striped" style="width:100%">
                <h1 class="display-6 fw-normal mx-auto text-center">Order List</h1>
                    <thead class="thead-dark">
                        <tr>
                            <th>Vendor Name</th>
                            <th>Item Name</th>
                            <th>Item Quantity</th>
                            <th>Unit Price</th>
                            <th>Total Price</th>
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