<?php

    require('db.php');

    // Save Vendor

    if($_POST['action'] == "saveVendor")
    {
        $name = $_POST['name'];
        $phoneNo = $_POST['phoneNo'];
        $email = $_POST['email'];
        $address = $_POST['address'];
        
        $saveVendor = "INSERT INTO vendor_information(vendor_name,phone_no,email,office_address,created_at) VALUES('$name','$phoneNo','$email','$address',NOW())";

        if ($conn->query($saveVendor) === TRUE)
        {
            echo "New Vendor added successfully";
        } 
        else
        {
            echo "Error: " . $saveVendor . "<br>" . $conn->error;
        }
          
        $conn->close();
    }

    // View Vendor

    if($_POST['action'] == "getVendor")
    {   
        $getVendor = "SELECT * FROM vendor_information WHERE active = 1";
        $result = $conn->query($getVendor);
        $result_array = array();

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                array_push($result_array, $row);
            }
        }

        header('Content-type: application/json');
        echo json_encode($result_array);
            
        $conn->close();
    }

    // Update Vendor

    if($_POST['action'] == "updateVendor")
    {
        $name = $_POST['name'];
        $phoneNo = $_POST['phoneNo'];
        $email = $_POST['email'];
        $address = $_POST['address'];
        $updateId = $_POST['updateId'];
        
        $updateVendor = "UPDATE vendor_information SET vendor_name = '$name' , phone_no = '$phoneNo' , email = '$email' , office_address = '$address' ,updated_at = NOW() WHERE id = '$updateId'";

        if ($conn->query($updateVendor) === TRUE)
        {
            echo "Vendor updated successfully";
        } 
        else
        {
            echo "Error: " . $updateVendor . "<br>" . $conn->error;
        }
          
        $conn->close();
    }

    // Delete Vendor

    if($_POST['action'] == "deleteVendor")
    {
        $deleteId = $_POST['deleteId'];
        
        $deleteVendor = "UPDATE vendor_information SET active = 0 , deleted_at = NOW() WHERE id = '$deleteId'";

        if ($conn->query($deleteVendor) === TRUE)
        {
            echo "Vendor deleted successfully";
        } 
        else
        {
            echo "Error: " . $deleteVendor . "<br>" . $conn->error;
        }
          
        $conn->close();
    }

    // Vendor List

    if($_POST['action'] == "vendorList")
    {   
        $getVendor = "SELECT id,vendor_name FROM vendor_information WHERE active = 1";
        $result = $conn->query($getVendor);
        $result_array = array();

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                array_push($result_array, $row);
            }
        }

        header('Content-type: application/json');
        echo json_encode($result_array);
            
        $conn->close();
    }

    // Purchase Order Save

    if($_POST['action'] == "purchaseOrder")
    {
        $itemName = $_POST['itemName'];
        $itemQty = $_POST['itemQty'];
        $unitPrice = $_POST['unitPrice'];
        $totalPrice = $_POST['totalPrice'];
        $vendor = $_POST['vendor'];
        
        $savePurchase = "INSERT INTO purchase_order(vendor_id,item_name,item_quantity,unit_price,total_price) VALUES('$vendor','$itemName','$itemQty','$unitPrice','$totalPrice')";

        if ($conn->query($savePurchase) === TRUE)
        {
            echo "Purchase order added successfully";
        } 
        else
        {
            echo "Error: " . $savePurchase . "<br>" . $conn->error;
        }
          
        $conn->close();
    }

    // View Purchase Order

    if($_POST['action'] == "getOrder")
    {   
        $getOrder = "SELECT vendor_name,item_name,item_quantity,unit_price,total_price FROM purchase_order INNER JOIN vendor_information ON vendor_information.id = purchase_order.vendor_id";
        $result = $conn->query($getOrder);
        $result_array = array();

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                array_push($result_array, $row);
            }
        }

        header('Content-type: application/json');
        echo json_encode($result_array);
            
        $conn->close();
    }

?>