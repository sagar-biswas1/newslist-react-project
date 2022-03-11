import React from 'react'

export default function Loading() {
  return (
    <div className="text-center mt-5">
      <div className="spinner-border text-danger mt-5" role="status">
        <div className="text-center">
          <div className="spinner-border text-warning" role="status">
            <div className="text-center">
              <div className="spinner-border text-info" role="status">
                <div
                  className="spinner-border spinner-border-sm text-primary"
                  role="status"
                >
                  <div
                    className="spinner-border"
                    style={{ width: "3rem", height: "3rem" }}
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <span className="visually-hidden">Loading...</span> */}
      </div>
    </div>
  );
}
