import React from "react";
import Form, { Item, GroupItem } from "devextreme-react/form";
import FileUploader from "devextreme-react/file-uploader";
// import DeleteIcon from "";
import Button from "@mui/material/Button";

export default function FormDevEx() {
  const employee = {
    ID: 1,
    FirstName: "John",
    LastName: "",
    Position: "CEO",
    BirthDate: "1964/03/16",
    HireDate: "1995/01/15",
    Postcode: "",
  };
  const validateForm = (e) => {
    e.component.validate();
  };
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
  };

  return (
    <div style={{ padding: "10rem" }}>
      <div style={{ padding: "5rem", border: "1px solid black" }}>
        <form onSubmit={handleSubmit}>
          <Form
            formData={employee}
            // onContentReady={validateForm}
            validationGroup="employee"
          >
            <GroupItem colCount={2}>
              <Item
                dataField="FirstName"
                editorOptions={
                  {
                    // disabled: true,
                  }
                }
                validationRules={[
                  {
                    type: "stringLength",
                    min: 2,
                    message: "City must have at least 2 symbols",
                  },
                ]}
              />
              <Item
                dataField="LastName"
                isRequired={true}
                validationRules={[
                  { type: "required", message: "firstname is needed" },
                  {
                    type: "pattern",
                    pattern: /^[^0-9]+$/,
                    message: "Do not use digits in the Name",
                  },
                ]}
              />
              <Item
                dataField="Postcode"
                validationRules={[
                  { type: "required", message: "Postcode is needed" },
                ]}
              />
              <Item
                dataField="GL/Code"
                helpText="แสดงข้อความช่วยเหลือ"
                editorOptions={{
                  mask: "XXXXXX",
                  maskRules: { X: /^[A-Z0-9_.-]*$/ },
                  maskInvalidMessage: "ข้อความแจ้งเตือนขึ้น",
                }}
              />
            </GroupItem>
            <GroupItem colCount={2}>
              <Item
                itemType="button"
                horizontalAlignment="left"
                cssClass="add-phone-button"
                buttonOptions={{
                  icon: "add",
                  text: "ยกเลิก",
                }}
              ></Item>
              <Item
                itemType="button"
                horizontalAlignment="right"
                cssClass="add-phone-button"
                buttonOptions={{
                  text: "บันทึก",
                }}
              ></Item>
            </GroupItem>
          </Form>
        </form>
      </div>

      <div>
        <FileUploader
          multiple={false}
          selectButtonText="อัพโหลดไฟล์"
          dropZone="#dropzone-external"
          dialogTrigger="#btn"
          uploadMode="instantly"
          uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
          // uploadCustomData={}
          uploadedMessage="Uploaded"
          uploadFailedMessage="Upload failed"
          uploadFile={null}
          // uploadHeaders={"header"}
          uploadMethod="POST"
          maxFileSize={2e6}
          isValid={true}
          invalidMaxFileSizeMessage="ไฟล์เกินขนาดจ้า"
          invalidFileExtensionMessage="ประเภทไฟลืไม่ถูกจ้า"
          // labelText="ลากไฟล์"
          visible={false}
          allowedFileExtensions={[".pdf"]}
          // onValueChange={(e) => console.log(e)}
          //เช็ค ขนาดไฟล์บน onBeforeSend ได้
          onBeforeSend={(e) => console.log(e.file)}
        />
      </div>
      <div
        id="dropzone-external"
        style={{
          marginTop: "1rem",
          padding: "5rem",
          border: "1px dashed red",
        }}
      >
        {/* <button id="btn" className="btn add">
          uploadIcon
        </button> */}
        <Button id="btn" variant="outlined">
          Delete
        </Button>

        <span>Drag & Drop the desired file</span>
        <span>…or click to browse for a file instead.</span>
      </div>
    </div>
  );
}
