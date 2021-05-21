import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = () => (
    <footer>
        <div className="w-full container mx-auto">
            <div className="flex justify-center py-5">
                <span>© 2017 - 2021 Chat-Sites.</span>
                <span className="mx-6">Privacy</span>
                <span>Terms</span>
            </div>
        </div>
    </footer>
)

export default Footer