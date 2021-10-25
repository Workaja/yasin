import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'reactstrap';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

export default function Profile() {
  const [draft,setDraft] = React.useState(
    () => EditorState.createEmpty()
  );
  return (
    <Container>
      <Row className="mt-3">
        <Col xl={{ size: 6, offset: 3 }} style={{ textAlign: 'center' }}>
          <h3 className="page_title">My Yasiin</h3>
        </Col>
      </Row>
      <Row>
        <Col xl={{ size: 6, offset: 3 }}>
          <div className="card">
            <form method="POST">
              <div className="form-group">
                My Yasiin Private URL:
                <br />
                https://yasi.in/muhamad-adam
              </div>
              <div className="form-group-avatar">
                <div className="sub-avatar">
                  <Image src={'/default-image.png'} height="128" width="128" alt="my-yasiin-logo" />
                </div>
                <div className="sub-avatar">
                  <button type="button" className="button primary">Upload Logo</button>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="yasiin-title">My Yasiin Title:</label>
                <input type="text" name="yasiin-title" id="yasiin-title" placeholder="Add title here, ex: Yasiin - M.Adam, SH." />
              </div>
              <div className="form-group">
                <label htmlFor="My Yasiin Description">My Yasiin Description:</label>
                <Editor
                  editorState={draft}
                  placeholder="Add description here..."
                  onChange={setDraft}/>
              </div>
              <div className="form-group">
                <label htmlFor="yasiin-theme">Color Theme:</label>
                <select name="yasiin-theme" id="yasiin-theme">
                  <option value="white-blue">White Blue</option>
                  <option value="white-black">White Black</option>
                  <option value="white-blue-batik">White Blue With Batik</option>
                </select>
              </div>
              <div className="form-group">
                <button type="submit" className="button submit">Save Change</button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
