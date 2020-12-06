import { render } from 'react-dom';
import './index.css';
import * as React from 'react';

import { SampleBase } from './sample-base';
import { PropertyPane } from './property-pane';
import { UploaderComponent, FilesDirective, UploadedFilesDirective } from '@syncfusion/ej2-react-inputs';
export class Preloadfiles extends SampleBase {
    constructor(props) {
        super(props);
        this.uploadWrapper = document.getElementsByClassName('e-upload')[0];
        this.dropContainerEle = null;
        this.dropContainerRef = element => {
            this.dropContainerEle = element;
        };
        this.asyncSettings = {
            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
        };
    }
    rendereComplete() {
        this.dropElement = this.dropContainerEle;
        this.uploadObj.dropArea = this.dropElement;
        this.uploadObj.dataBind();
        this.uploadObj.element.setAttribute('name', 'UploadFiles');
    }
    onRemoveFile(args) {
        args.postRawFile = false;
    }
    clearButtonClick() {
        this.uploadObj.clearAll();
    }
    render() {
        return (<div className='control-pane' ref={this.dropContainerRef}>
			<div className='control-section uploadpreview'>
				<div className='col-lg-9'>
					<div className='validation_wrapper'>
						<UploaderComponent id='validation' type='file' ref={(scope) => { this.uploadObj = scope; }} asyncSettings={this.asyncSettings} removing={this.onRemoveFile.bind(this)}>
							<FilesDirective>
								<UploadedFilesDirective name="Nature" size={25000} type=".png"></UploadedFilesDirective>
								<UploadedFilesDirective name="TypeScript succinctly" size={12000} type=".pdf"></UploadedFilesDirective>
								<UploadedFilesDirective name="ASP.NET" size={17000} type=".docx"></UploadedFilesDirective>
							</FilesDirective>
						</UploaderComponent>
					</div>
				</div>
					<div className='property-section preload-panel col-lg-3'>
						<PropertyPane title='Properties'>
							<div className='panel-style'>
								<button className="e-btn e-css" onClick={this.clearButtonClick = this.clearButtonClick.bind(this)} id="clearbtn" title="Clear All">Clear All</button>
							</div>
						</PropertyPane>
					</div>
			</div>
      </div>);
    }
}

render(<Preloadfiles />, document.getElementById('sample'));