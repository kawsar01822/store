$( document ).ready(function()
{
    currLoc = $(location).attr('href');
    locArray = currLoc.split("/");

    if(locArray[locArray.length-1] != "purchase.php")
    {
        $("#vendorHelp").hide(0);
        $("#phoneHelp").hide(0);
        $("#emailHelp").hide(0);
        $("#officeHelp").hide(0);
        $( "#successMsg" ).hide(0);
        $( "#errorMsg" ).hide(0);
        $( "#updateVendor" ).hide(0);
        viewVendor();

        // Edit Vendor

        $("#vendor").on('click','#edit',function(){
            var currentRow = $(this).closest("tr");
            var vendorName = currentRow.find("td:eq(0)").text();
            var vendorPhone = currentRow.find("td:eq(1)").text();
            var vendorEmail = currentRow.find("td:eq(2)").text();
            var vendorOffice = currentRow.find("td:eq(3)").text();
            var vendorId = currentRow.find("td:eq(4) > #vendorId").val();

            $( "#vendorName" ).val(vendorName);
            $( "#phone" ).val(vendorPhone);
            $( "#email" ).val(vendorEmail);
            $( "#address" ).val(vendorOffice);
            $( "#updateVendorId" ).val(vendorId);

            $("#addVendor").hide(0);
            $("#updateVendor").show(0);
            
        });

        // Delete Vendor

        $("#vendor").on('click','#delete',function(){
            var currentRow = $(this).closest("tr");
            var deleteId = currentRow.find("td:eq(4) > #vendorId").val();

            $.ajax({
                method: "POST",
                url: "functions.php",
                data: { action: "deleteVendor" , deleteId: deleteId },
                dataType: "html"
            })
            .done(function( msg ) {
                $( "#successMsg" ).text( "Data Saved: " + msg ).show("slow").delay(5000).hide("slow");
                viewVendor();
            })
            .fail(function( jqXHR, textStatus ) {
                $( "#errorMsg" ).text( "Request failed: " + textStatus ).show("slow").delay(5000).hide("slow");
                viewVendor();
            });
        });

        // Add Vendor

        $("#addVendor").on('click',function()
        {
            var vendorName = $( "#vendorName" ).val().trim();
            var phoneNo = $( "#phone" ).val().trim();
            var email = $( "#email" ).val().trim();
            var address = $( "#address" ).val().trim();
            var error = 0;

            if(!vendorName)
            {
                $("#vendorHelp").text("Please Provide Vendor Name");
                $("#vendorHelp").show("slow");
                error++;
            }
            else
            {
                $("#vendorHelp").text("");
                $("#vendorHelp").hide("slow");
            }

            if(!phoneNo)
            {
                $("#phoneHelp").text("Please Provide Phone No");
                $("#phoneHelp").show("slow");
                error++;
            }
            else
            {
                if(phoneNo.length == 11)
                {
                    $("#phoneHelp").text("");
                    $("#phoneHelp").hide("slow");
                }
                else
                {
                    $("#phoneHelp").text("Phone No should contain 11 Numbers");
                    $("#phoneHelp").show("slow");
                    error++;
                }
            }

            if(!email)
            {
                $("#emailHelp").text("Please Provide Email Address");
                $("#emailHelp").show("slow");
                error++;
            }
            else
            {
                if(!validateEmail(email))
                {
                    $("#emailHelp").text("Please provide a valid Email");
                    $("#emailHelp").show("slow");
                    error++;
                }
                else
                {
                    $("#emailHelp").text("");
                    $("#emailHelp").hide("slow");
                }
            }
            
            if(!address)
            {
                $("#officeHelp").text("Please Provide Office Address");
                $("#officeHelp").show("slow");
                error++;
            }
            else
            {
                $("#officeHelp").text("");
                $("#officeHelp").hide("slow");
            }
            
            if(error == 0)
            {
                // Hiding Error

                $( "#vendorHelp" ).hide(0);
                $( "#phoneHelp" ).hide(0);
                $( "#emailHelp" ).hide(0);
                $( "#officeHelp" ).hide(0);

                //Setting Null value to field

                $( "#vendorName" ).val("");
                $( "#phone" ).val("");
                $( "#email" ).val("");
                $( "#address" ).val("");

                $.ajax({
                    method: "POST",
                    url: "functions.php",
                    data: { action: "saveVendor" , name: vendorName , phoneNo: phoneNo , email: email , address: address },
                    dataType: "html"
                })
                .done(function( msg ) {
                    $( "#successMsg" ).text( "Data Saved: " + msg ).show("slow").delay(5000).hide("slow");
                    viewVendor();
                })
                .fail(function( jqXHR, textStatus ) {
                    $( "#errorMsg" ).text( "Request failed: " + textStatus ).show("slow").delay(5000).hide("slow");
                    viewVendor();
                });
            }
        })

        // Valid Email Check

        function validateEmail(email) 
        {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailReg.test(email);
        }

        // View Vendor

        function viewVendor()
        {
            $.ajax({
                method: "POST",
                url: "functions.php",
                data: { action: "getVendor"},
                dataType: "html"
            })
            .done(function( data ) {
                $("tbody"). empty();
                var result = $.parseJSON(data);
                $.each( result, function( key, value ) {
                    string = "<tr><td>"+value['vendor_name']+"</td><td>"+value['phone_no']+"</td><td>"+value['email']+"</td><td>"+value['office_address']+"</td><td><input type='hidden' id='vendorId' value='"+value['id']+"'><i class='fa-solid fa-pen-to-square text-primary me-2' role='button' data-bs-toggle='tooltip' title='Edit' id='edit'></i><i class='fa-solid fa-trash text-danger ms-2' role='button' data-bs-toggle='tooltip' title='Delete' id='delete'></i></td></tr>";
                    $('tbody').append(string);
                    $('.odd').hide(0);
                })
            })
            .fail(function( jqXHR, textStatus ) {
                alert( "Failed to Load Data: " + textStatus ).show("slow");
            });
        }

        // Update Vendor

        $("#updateVendor").on('click',function()
        {
            var vendorName = $( "#vendorName" ).val().trim();
            var phoneNo = $( "#phone" ).val().trim();
            var email = $( "#email" ).val().trim();
            var address = $( "#address" ).val().trim();
            var updateId = $( "#updateVendorId" ).val().trim();
            var error = 0;

            if(!vendorName)
            {
                $("#vendorHelp").text("Please Provide Vendor Name");
                $("#vendorHelp").show("slow");
                error++;
            }
            else
            {
                $("#vendorHelp").text("");
                $("#vendorHelp").hide("slow");
            }

            if(!phoneNo)
            {
                $("#phoneHelp").text("Please Provide Phone No");
                $("#phoneHelp").show("slow");
                error++;
            }
            else
            {
                if(phoneNo.length == 11)
                {
                    $("#phoneHelp").text("");
                    $("#phoneHelp").hide("slow");
                }
                else
                {
                    $("#phoneHelp").text("Phone No should contain 11 Numbers");
                    $("#phoneHelp").show("slow");
                    error++;
                }
            }

            if(!email)
            {
                $("#emailHelp").text("Please Provide Email Address");
                $("#emailHelp").show("slow");
                error++;
            }
            else
            {
                if(!validateEmail(email))
                {
                    $("#emailHelp").text("Please provide a valid Email");
                    $("#emailHelp").show("slow");
                    error++;
                }
                else
                {
                    $("#emailHelp").text("");
                    $("#emailHelp").hide("slow");
                }
            }
            
            if(!address)
            {
                $("#officeHelp").text("Please Provide Office Address");
                $("#officeHelp").show("slow");
                error++;
            }
            else
            {
                $("#officeHelp").text("");
                $("#officeHelp").hide("slow");
            }

            if(error == 0)
            {
                // Hiding Error

                $( "#vendorHelp" ).hide(0);
                $( "#phoneHelp" ).hide(0);
                $( "#emailHelp" ).hide(0);
                $( "#officeHelp" ).hide(0);

                //Setting Null value to field

                $( "#vendorName" ).val("");
                $( "#phone" ).val("");
                $( "#email" ).val("");
                $( "#address" ).val("");

                $.ajax({
                    method: "POST",
                    url: "functions.php",
                    data: { action: "updateVendor" , name: vendorName , phoneNo: phoneNo , email: email , address: address , updateId: updateId },
                    dataType: "html"
                })
                .done(function( msg ) {
                    $( "#successMsg" ).text( "Data Saved: " + msg ).show("slow").delay(5000).hide("slow");
                    $("#addVendor").show(0);
                    $("#updateVendor").hide(0);
                    viewVendor();
                })
                .fail(function( jqXHR, textStatus ) {
                    $( "#errorMsg" ).text( "Request failed: " + textStatus ).show("slow").delay(5000).hide("slow");
                    viewVendor();
                });
            }
        })
    }
    else if(locArray[locArray.length-1] == "purchase.php")
    {
        $( "#purchaseSuccessMsg" ).hide(0);
        $( "#purchaseErrorMsg" ).hide(0);
        viewOrder();
        vendorList();

        function vendorList()
        {
            $.ajax({
                method: "POST",
                url: "functions.php",
                data: { action: "vendorList"},
                dataType: "html"
            })
            .done(function( data ) {
                var result = $.parseJSON(data);
                $.each( result, function( key, value ) {
                    string = "<option value="+value['id']+">"+value['vendor_name']+"</option>";
                    $('#vendorList').append(string);
                })
            })
            .fail(function( jqXHR, textStatus ) {
                alert( "Failed to Load Vendor List: " + textStatus ).show("slow");
            });
        }

        $(".totalCalc").on('keyup',function(){
            var itemQty = $("#itemQty").val();
            var unitPrice = $("#unitPrice").val();
            var totalPrice = 0;
    
            if(itemQty && unitPrice)
            {
                var totalPrice = itemQty*unitPrice;
            }
    
            $("#totalPrice").val(totalPrice);
        });
    
        $("#order").on('click',function(){
            var itemName = $("#itemName").val();
            var itemQty = $("#itemQty").val();
            var unitPrice = $("#unitPrice").val();
            var totalPrice = $("#totalPrice").val();
            var vendor = $("#vendorList").val();
            var error = 0;
    
            if(!itemName)
            {
                $("#itemNameHelp").text("Please Provide Item Name");
                $("#itemNameHelp").show("slow");
                error++;
            }
            else
            {
                $("#itemNameHelp").text("");
                $("#itemNameHelp").hide("slow");
            }
    
            if(!itemQty)
            {
                $("#itemQtyHelp").text("Please Provide Item Quantity");
                $("#itemQtyHelp").show("slow");
                error++;
            }
            else
            {
                $("#itemQtyHelp").text("");
                $("#itemQtyHelp").hide("slow");
            }
    
            if(!unitPrice)
            {
                $("#unitPriceHelp").text("Please Provide Unit Price");
                $("#unitPriceHelp").show("slow");
                error++;
            }
            else
            {
                $("#unitPriceHelp").text("");
                $("#unitPriceHelp").hide("slow");
            }

            if(!vendor)
            {
                $("#vendorListeHelp").text("Please add vendor First");
                $("#vendorListeHelp").show("slow");
                error++;
            }
            else
            {
                $("#vendorListeHelp").text("");
                $("#vendorListeHelp").hide("slow");
            }
    
            if(error == 0)
            {
                $("#itemName").val("");
                $("#itemQty").val("");
                $("#unitPrice").val("");
                $("#totalPrice").val("");
                
                $.ajax({
                    method: "POST",
                    url: "functions.php",
                    data: { action: "purchaseOrder" , itemName: itemName , itemQty: itemQty , unitPrice: unitPrice , totalPrice: totalPrice , vendor: vendor},
                    dataType: "html"
                })
                .done(function( msg ) {
                    $( "#purchaseSuccessMsg" ).text( "Data Saved: " + msg ).show("slow").delay(5000).hide("slow");
                    viewOrder();
                })
                .fail(function( jqXHR, textStatus ) {
                    $( "#purchaseErrorMsg" ).text( "Request failed: " + textStatus ).show("slow").delay(5000).hide("slow");
                    viewOrder();
                });
    
            }
    
        });

        // View Purchase Order

        function viewOrder()
        {
            $.ajax({
                method: "POST",
                url: "functions.php",
                data: { action: "getOrder"},
                dataType: "html"
            })
            .done(function( data ) {
                $("tbody"). empty();
                var result = $.parseJSON(data);
                $.each( result, function( key, value ) {
                    string = "<tr><td>"+value['vendor_name']+"</td><td>"+value['item_name']+"</td><td>"+value['item_quantity']+"</td><td>"+value['unit_price']+"</td><td>"+value['total_price']+"</td></tr>";
                    $('tbody').append(string);
                    $('.odd').hide(0);
                })
            })
            .fail(function( jqXHR, textStatus ) {
                alert( "Failed to Load Data: " + textStatus ).show("slow");
            });
        }
    }
});
