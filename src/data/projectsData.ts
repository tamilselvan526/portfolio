export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface FogVisionSample {
  id: string;
  title: string;
  beta: string;
  foggyUrl: string;
  restoredUrl: string;
  inputMetrics: { psnr: number; ssim: number };
  restoredMetrics: { psnr: number; ssim: number };
  description: string;
}

export interface CastingDefectSample {
  id: string;
  name: string;
  severity: 'High' | 'Medium' | 'Critical' | 'Pass';
  description: string;
  action: string;
  predictions: {
    customCnn: number;
    mobileNet: number;
    resNet: number;
  };
}

export const FOG_VISION_SAMPLES: FogVisionSample[] = [
  {
    id: 'medium-fog',
    title: 'Medium Fog Scenario (Cityscapes-DBF)',
    beta: 'β = 0.010',
    foggyUrl: '/projects/fogvision/foggy_medium.png',
    restoredUrl: '/projects/fogvision/restored_quantum.png',
    inputMetrics: { psnr: 16.42, ssim: 0.684 },
    restoredMetrics: { psnr: 24.85, ssim: 0.892 },
    description: 'Autonomous vehicle forward-facing camera facing atmospheric aerosol scattering. The hybrid quantum-classical model sharpens edge gradients and clears distant building boundaries.'
  },
  {
    id: 'light-fog',
    title: 'Light Fog Scenario (Cityscapes-DBF)',
    beta: 'β = 0.005',
    foggyUrl: '/projects/fogvision/foggy_light.png',
    restoredUrl: '/projects/fogvision/restored_light.png',
    inputMetrics: { psnr: 20.15, ssim: 0.791 },
    restoredMetrics: { psnr: 29.40, ssim: 0.942 },
    description: 'Early morning suburban road visibility restoration, recovering traffic lane demarcations and vehicle outlines with low chromatic aberration.'
  }
];

export const CASTING_DEFECTS: CastingDefectSample[] = [
  {
    id: 'blowhole',
    name: 'Blowhole Defect',
    severity: 'Critical',
    description: 'Internal or surface gas entrapment cavities formed during mold filling, compromising structural rigidity.',
    action: 'Quarantine part. Automated alert dispatched to casting line technician.',
    predictions: {
      customCnn: 96.4,
      mobileNet: 94.8,
      resNet: 97.9
    }
  },
  {
    id: 'crack',
    name: 'Crack / Tear',
    severity: 'Critical',
    description: 'Thermal contraction stress fractures along the impeller vanes or flange perimeter.',
    action: 'Reject component. Flag batch for thermal gradient verification.',
    predictions: {
      customCnn: 95.1,
      mobileNet: 93.6,
      resNet: 98.2
    }
  },
  {
    id: 'flash',
    name: 'Parting Line Flash',
    severity: 'Medium',
    description: 'Excess material squeeze-out along the die parting line due to clamp pressure fluctuation.',
    action: 'Route to secondary deburring station for automated CNC trimming.',
    predictions: {
      customCnn: 93.8,
      mobileNet: 91.2,
      resNet: 94.5
    }
  },
  {
    id: 'normal',
    name: 'Normal (Non-Defective)',
    severity: 'Pass',
    description: 'Uniform surface density, clean vane contours, and dimensional tolerance within specification.',
    action: 'Approved for assembly into powertrain pump subsystem.',
    predictions: {
      customCnn: 98.9,
      mobileNet: 97.5,
      resNet: 99.4
    }
  }
];

export const TECHNICAL_SKILLS = [
  {
    category: 'Computer Vision & Deep Learning',
    skills: ['PyTorch', 'TensorFlow', 'Keras 3', 'OpenCV', 'U-Net Architectures', 'EfficientNet', 'ResNet50', 'MobileNetV2', 'Image Augmentation']
  },
  {
    category: 'Quantum Computing & Optimization',
    skills: ['PennyLane', 'Variational Quantum Circuits (VQC)', '4-Qubit Bottleneck Modeling', 'PyTorch Tensor Matrix Simulation', 'L1 Pruning Regularization']
  },
  {
    category: 'Model Deployment & Edge Inference',
    skills: ['ONNX Export', 'ONNX Runtime', 'Edge Latency Benchmarking', 'Flask REST APIs', 'Inference Server Architecture']
  },
  {
    category: 'Interactive Application Development',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js 15', 'Redux', 'RESTful Systems', 'Responsive UI/UX Prototyping']
  }
];
