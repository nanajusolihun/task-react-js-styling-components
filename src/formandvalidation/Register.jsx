import { Container, Form, Button } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";

const initialValues = {
  email: "",
  password: "",
};

const onlyText = /^[a-zA-Z]+$/;

const validationSchema = Yup.object({
  email: Yup.string().required("Email harus di isi").email(),
  password: Yup.string().required("Password harus di isi").matches(onlyText, "Hanya boleh alfabet"),
});

function Register() {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container className="text-start">
      <div className="card shadow">
        <div className="card-body">
          <h1>Registrasi Form</h1>
        </div>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />

            {formik.touched.email && formik.errors.email && <span className="text-danger">{formik.errors.email}</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.password && formik.errors.password && <span className="text-danger">{formik.errors.password}</span>}
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Register;
