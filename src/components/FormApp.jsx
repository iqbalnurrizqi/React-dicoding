import React from "react";
import FormItem from "./FormItem";


function FormApp ({data, title, body, createdAt}) {
    return (
        <div className="note-app__body">
            {data.map((item) => {
                return (
                    <FormItem key={item.id} 
                    {...item} />
                )
            })
                    }
        </div>
    );
}
    export default FormApp;
