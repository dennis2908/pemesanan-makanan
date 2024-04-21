import { Card, CardBody, CardHeader, CardFooter } from '@paljs/ui/Card';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';

export default function Home() {

  function capitalizeFirstLetter(string: any) {
    if (string) return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Layout title="Dashboard">
      <Row>
        <Col breakPoint={{ xs: 24, md: 12 }}>
          <Card status="Primary" accent="Info">
            <CardHeader>Dashboard</CardHeader>
            <CardBody>Halo User!!</CardBody>
            <CardFooter></CardFooter>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}
