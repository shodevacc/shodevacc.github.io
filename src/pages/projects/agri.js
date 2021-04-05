import React from "react"
import Page from "../../components/Page"
import { graphql } from "gatsby"
import * as styles from "../../style/agri.module.css"
import { GatsbyImage } from "gatsby-plugin-image";

function agri({ data }) {
  var filteredData = {}

  data.agri.edges.forEach(edge => {
    filteredData[edge.node.name] = edge.node.childImageSharp.gatsbyImageData
  })

  return (
    <Page title="Agri-Cane project">
      <div className={styles.container}>
        <h2>AGRI-CANE</h2>
        <h4 style={{ margin: "0px 0px 50px", textAlign: "center" }}>
          Check it out on{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/veeprayas/MAIN"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Github
          </a>
        </h4>
        <div className={styles.float}>
          <div>
            <GatsbyImage image={filteredData.block} />
            <p className={styles.figName}>Fig: Basic Block Diagram</p>
          </div>
          <div>
            <div>
              <h3>Introduction</h3>
              <p>
                In today’s era, farmers face a lot of problems while growing
                their crops. This could be due to lack of insight on the growth
                requirements of the crop or due to environmental factors. In our
                project we highlight on the growth of sugarcane from sowing till
                cutting and monitor every aspect throughout.
              </p>
              <h3>Scope</h3>
              <p>
                I assisted{" "}
                <a
                  href="https://www.linkedin.com/in/yash-prakash-030292162"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue" }}
                >
                  Yash Prakash
                </a>{" "}
                in specifically implementing the Image Classification model of
                this project. Deep-Learning applied to computer vision was
                implemented to monitor leaves of sugarcane and indicate whether
                it is infected with yellow leaf syndrome or red dot disease,
                which are the two prominent diseases which attack sugarcane, and
                can be detected using image processing techniques. This would
                help the farmers increase their yield.
              </p>
              <h3>My Objectives</h3>
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  To help the farmer by giving productive information about the
                  health of his/her farm.
                </li>
                <li>
                  Employ state of the art deep learning to achieve maximum
                  accuracy.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h3>The Software</h3>
        <p>
          There are three main steps involved in the Image Processing portion of
          this project.
        </p>
        <ul>
          <li>
            Pick an existing state-of-art Deep Learning Model for our image
            classification.
          </li>
          <li>
            Train it on an extensive image dataset such as Imagenet so it can
            learn to extract the different features from images.
          </li>
          <li>
            Apply some magic from Transfer Learning to make it "transfer" its
            learnt skills of feature extraction on our sugarcanes, and detect
            the presence of any disease.
          </li>
        </ul>
        <h4>INCEPTION V3</h4>
        <p>
          Inception v3 is a widely-used image recognition model that has been
          shown to attain greater than 78.1% accuracy on the ImageNet dataset.
          The model is the culmination of many ideas developed by multiple
          researchers over the years. It is based on the original
          paper:"Rethinking the Inception Architecture for Computer Vision" by
          Szegedy.
          <br />
          <br />
          Inception V3 is an example of a Convolution Neural Network which has
          two parts:
        </p>
        <ul style={{ listStyleType: "disc" }}>
          <li>
            A convolution tool that splits the various features of the image for
            analysis
          </li>
          <li>
            A fully connected layer that uses the output of the convolution
            layer to predict the best description for the image.
          </li>
        </ul>
        <br />
        The model itself is made up of symmetric and asymmetric building blocks,
        including convolutions, average pooling, max pooling dropouts, and fully
        connected layers. Batch norm is used extensively throughout the model
        and applied to activation inputs. Loss is computed via Softmax. A
        high-level diagram of the model is shown below:{" "}
        <div>
          <GatsbyImage image={filteredData.inception} />
          <p className={styles.figName}>Fig: Inception v3 model</p>
        </div>
        <p>
          The different layers used in the Deep learning model and their
          functions are highlighted below
        </p>
        <ul>
          <li>
            <p>
              <b>Convolution Layer:</b>These layers employ different sets of
              filters, typically hundreds-thousands and combines the results,
              feeding the output into the next layer. This layer has "filters"
              that automatically detects "values" for its filters and detects
              objects in steps{" "}
            </p>
            <ul>
              <li>Detect "Edges" from pixel intensities</li>
              <li>use "Edges" to detect "Shapes"</li>
              <li>
                use "Shapes" to detect high-level features like facial
                structures or parts of a leaf.
              </li>
            </ul>
          </li>
          <li>
            <p>
              <b>Activation Layer:</b>After each CONV layer in a CNN, we apply a
              nonlinear activation function, such as ReLU, ELU etc. Activation
              layers are not technically “layers” (due to the fact that no
              parameters/weights are learned inside an activation layer) and are
              sometimes omitted from network architecture diagrams as it’s
              assumed that an activation immediately follows a convolution.
            </p>
          </li>
          <li>
            <p>
              <b>Pooling Layer:</b>It is common to insert POOL layers in-between
              consecutive convolution layers. The primary function of the POOL
              layer is to progressively reduce the spatial size (i.e., width and
              height) of the input volume. Doing this allows us to reduce the
              amount of parameters and computation in the network – pooling also
              helps us control overfitting. Max pooling is typically done in the
              middle of the CNN architecture to reduce spatial size, whereas
              average pooling is normally used as the final layer of the network
              (e.x., GoogLeNet, SqueezeNet, ResNet) where we wish to avoid using
              FC layers entirely.
            </p>
          </li>
          <li>
            <p>
              <b>Fully-Connected Layer:</b>Neurons in FC layers are
              fully-connected to all activations in the previous layer, as is
              the standard for feedforward neural networks. FC layers are always
              placed at the end of the network.
            </p>
          </li>
          <li>
            <p>
              <b>Dropout Layer:</b>Dropout is actually a form of regularization
              that aims to help prevent overfitting by increasing testing
              accuracy, perhaps at the expense of training accuracy. For each
              mini-batch in our training set, dropout layers, with probability
              p, randomly disconnect inputs from the preceding layer to the next
              layer in the network architecture. The reason we apply dropout is
              to reduce overfitting by explicitly altering the network
              architecture at training time. Randomly dropping connections
              ensures that no single node in the network is responsible for
              “activating” when presented with a given pattern. Instead, dropout
              ensures there are multiple, redundant nodes that will activate
              when presented with similar inputs – this in turn helps our model
              to generalize.
            </p>
          </li>
        </ul>
        <p>
          Before the model can be used to recognize images, it must be trained.
          This is usually done via supervised learning using a large set of
          labeled images. Although Inception v3 can be trained from many
          different labeled image sets,&nbsp;ImageNet&nbsp;is a common dataset
          of choice. ImageNet has over ten million URLs of labeled images. About
          a million of the images also have bounding boxes specifying a more
          precise location for the labeled objects. For this model, the ImageNet
          dataset is composed of 1,331,167 images which are split into training
          and evaluation datasets containing 1,281,167 and 50,000 images,
          respectively. The training and evaluation datasets are kept separate
          intentionally. Only images from the training dataset are used to train
          the model and only images from the evaluation dataset are used to
          evaluate model accuracy.
        </p>
        <h3>Transfer Learning</h3>
        <div>
          <GatsbyImage image={filteredData.transfer} />
          <p className={styles.figName}>Fig: Transfer Learning</p>
        </div>
        <p>
          Transfer learning is the improvement of learning in a new task through
          the transfer of knowledge from a related task that has already been
          learned.
          <br />
          Transfer learning is a machine learning method where a model developed
          for a task is reused as the starting point for a model on a second
          task.
          <br />
          It is a popular approach in deep learning where pre-trained models are
          used as the starting point on computer vision and natural language
          processing tasks given the vast compute and time resources required to
          develop neural network models on these problems and from the huge
          jumps in skill that they provide on related problems.
        </p>
        <p>
          It is common to perform transfer learning with predictive modeling
          problems that use image data as input.
          <br /> This may be a prediction task that takes photographs or video
          data as input.
          <br /> For these types of problems, it is common to use a deep
          learning model pre-trained for a large and challenging image
          classification task such as the ImageNet 1000-class photograph
          classification competition.
          <br /> The research organizations that develop models for this
          competition and do well often release their final model under a
          permissive license for reuse. These models can take days or weeks to
          train on modern hardware.
          <br />
          <br /> These models can be downloaded and incorporated directly into
          new models that expect image data as input. <br />
          <br />
          This approach is effective because the images were trained on a large
          corpus of photographs and require the model to make predictions on a
          relatively large number of classes, in turn, requiring that the model
          efficiently learn to extract features from photographs in order to
          perform well on the problem.
        </p>
        <h3>Proposed Model</h3>
        <div>
          <GatsbyImage
            image={filteredData.proposed}
            style={{ maxWidth: "500px", margin: "auto" }} />
          <p className={styles.figName}>Fig: Proposed Model</p>
        </div>
        <p>
          <b>Step 1:</b> Take input as the image (crop-disease pair image).
          <br />
          <b>Step 2:</b>Pre-processing plant images.
          <br />
          <b>Step 3:</b> Train the model with leaf disease.
          <br />
          <b>Step 4:</b> CNN Validation stage where we can increase the
          efficiency before make any test, which is sort of as the development
          environment. <br />
          <b>Step 5:</b> Test the model <br />
          <b>Step 6:</b> A website will appear where user can identify whether
          the leaf is diseased or healthy. The main aim is to design a system
          which is efficient and which provide disease name. For that purpose we
          use two phase: 1st is training phase and 2nd is testing phase.
          <br />
          <br />
          <b>
            In 1
            <span style={{ verticalAlign: "super", fontSize: "10px" }}>st</span>{" "}
            phase:
          </b>{" "}
          Image acquisition, Image Pre-processing and CNN based training. <br />
          <b>
            In 2
            <span style={{ verticalAlign: "super", fontSize: "10px" }}>nd</span>{" "}
            phase:
          </b>{" "}
          Image acquisition, Image Pre-processing, Classification and disease
          identification and pesticides identification.
          <br />
          <br />
          <b style={{ fontSize: "16px" }}>**NOTE**</b>Due to the{" "}
          <b>COVID-19 outbreak</b>, we were unsuccessful in gathering sufficient
          image data to train our classifier on yellow leaf syndrome or red dot
          disease as most travel was prohibited. Therefore, for experimentation
          purpose we have used <b>Plant Village datasets</b>. The data records
          contain 54,000 images. The images span 14 crop species: Apple,
          Blueberry, Cherry, Corn, Grape, Orange, Peach, Bell Pepper, Potato,
          Raspberry, Soybean, Squash, Strawberry, and Tomato. It contains images
          of{" "}
          <b>
            17 fungal diseases, 4 bacterial diseases, 2 mold (oomycete)
            diseases, 2 viral disease, and 1 disease caused by a mite
          </b>
          . 12 crop species also have images of healthy leaves that are{" "}
          <b>not visibly </b>affected by a disease.
        </p>
        <div>
          <GatsbyImage
            image={filteredData.snippet}
            style={{ maxWidth: "500px", margin: "auto" }} />
          <p className={styles.figName}>Fig: Snippet of Dataset</p>
        </div>
        <h3>RESULTS</h3>
        <p>
          Here is the final webapp landing page where the farmer is expected to
          upload the image of the suagarcane leaf to check if it is diseased or
          not.(Developed by Yash)
          <br />
          The uploaded image is sent to the back end where the image processing
          techniques are used to determine the state of the crop.
        </p>
        <div>
          <GatsbyImage image={filteredData.landing} />
          <p className={styles.figName}>
            Fig: Web Application Image Upload page
          </p>
        </div>
        <p>
          After training the Inception v3 model on the ImageNet Dataset and
          applying transfer learning to classify our required dataset, we end up
          with the following Model Classification Report.
        </p>
        <div>
          <GatsbyImage image={filteredData.Report} style={{ maxWidth: "500px", margin: "auto" }} />
          <p className={styles.figName}>Fig: Model Classification Report</p>
        </div>
        <p>
          {" "}
          The matrix below shows which class of crop/ disease the picture taken
          resembles and has highest probability with respect to the picture
          uploaded. In this case the position 1 is of highest probability and
          hence resembles class one disease. The matrix position with the
          highest probability represents the class of leaf (image uploaded by
          the farmer). Hence, this is used to say whether that particular crop
          is diseased or not.
        </p>
        <div className={styles.float}>
          <div>
            <GatsbyImage image={filteredData.table} />
            <p className={styles.figName}>
              Fig: classification table for probability matrix verification
            </p>
          </div>

          <div>
            <GatsbyImage image={filteredData.matrix} />
            <p className={styles.figName}>
              Fig: Probability Matrix obtained after image processing
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}

export const query = graphql`{
  agri: allFile(filter: {relativeDirectory: {eq: "agri"}}) {
    edges {
      node {
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}
`

export default agri
