
#include <jni.h>
#include <string>
#include <opencv2/imgcodecs.hpp>
#include <opencv2/imgproc.hpp>
#include <opencv2/core.hpp>

using namespace cv;
using namespace std;

extern "C"
JNIEXPORT jint JNICALL
Java_com_example_flamappedge_MainActivity_processImagePath(JNIEnv *env, jobject thiz,
                                                           jstring input_path, jstring out_path) {
    const char *in_c = env->GetStringUTFChars(input_path, NULL);
    const char *out_c = env->GetStringUTFChars(out_path, NULL);
    string in_str(in_c), out_str(out_c);

    // Read image
    Mat src = imread(in_str, IMREAD_COLOR);
    if (src.empty()) {
        env->ReleaseStringUTFChars(input_path, in_c);
        env->ReleaseStringUTFChars(out_path, out_c);
        return -1;
    }
    Mat gray, edges;
    cvtColor(src, gray, COLOR_BGR2GRAY);
    Canny(gray, edges, 80, 150);
    // Convert edges to 3-channel for saving
    Mat edges_color;
    cvtColor(edges, edges_color, COLOR_GRAY2BGR);
    imwrite(out_str, edges_color);

    env->ReleaseStringUTFChars(input_path, in_c);
    env->ReleaseStringUTFChars(out_path, out_c);
    return 0;
}
