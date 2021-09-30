import React from 'react';
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

export function Profile() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {m: 2, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="nickName-required"
                    label="Имя учетной записи"
                    variant="filled"
                />
                <TextField
                    required
                    id="password-input"
                    label="Пароль"
                    type="password"
                    variant="filled"
                />
                <TextField
                    required
                    id="confirmation-password-input"
                    label="Подтвердите пароль"
                    type="password"
                    variant="filled"
                />
            </div>
        </Box>
    );
}
